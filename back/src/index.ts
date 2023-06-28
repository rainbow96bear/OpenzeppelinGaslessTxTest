import express, { Express, Request, Response, NextFunction } from "express";
import session from "express-session";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import pinataSDK from "@pinata/sdk";
import multer from "multer";
import fs from "fs";

dotenv.config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

const app: Express = express();

app.set("port", process.env.PORT || 8080);
app.use("/", express.static(path.join(__dirname, "build")));
app.use("/imgsrc", express.static("uploads"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use((req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV == "production") {
    morgan("combined")(req, res, next);
  } else {
    morgan("dev")(req, res, next);
  }
});

app.post("/pinataUpload", upload.single("file"), async (req, res) => {
  const pinata = new pinataSDK(
    process.env.PINATA_API_KEY,
    process.env.PINATA_API_SECRET
  );
  const imgfile = req.file;
  const name = req.body.name;
  const imageData = fs.createReadStream(`./uploads/${imgfile?.filename}`);
  try {
    const result = await pinata.pinFileToIPFS(imageData, {
      pinataMetadata: {
        name: String(imgfile?.filename),
      },
      pinataOptions: {
        cidVersion: 0,
      },
    });
    const IpfsHash = result.IpfsHash;
    console.log(IpfsHash);
    const jsonResult = await pinata.pinJSONToIPFS(
      {
        name: `${name}`,
        description: "testNFT description test",
        image: `ipfs://${IpfsHash}`,
        attributes: [
          {
            trait_type: "City",
            value: "test city",
          },
          {
            trait_type: "name",
            value: "test name",
          },
        ],
      },
      {
        pinataMetadata: {
          name: imgfile?.filename.split(".")[0] + ".json",
        },
        pinataOptions: {
          cidVersion: 0,
        },
      }
    );
    const JsonIpfsHash = jsonResult.IpfsHash;
    console.log(JsonIpfsHash);
    res.send(JsonIpfsHash);
  } catch (e) {
    console.log(e);
    res.end();
  }
});

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    secret: String(process.env.COOKIE_SECRET),
    name: "session",
  })
);

app.listen(app.get("port"), () => {
  console.log("서버 열음");
});
