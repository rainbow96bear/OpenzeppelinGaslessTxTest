const { AutotaskClient } = require("defender-autotask-client");
const { readFileSync, appendFileSync } = require("fs");

async function main() {
  require("dotenv").config();
  const {
    relayer: { relayerId },
  } = JSON.parse(readFileSync("./relay.json"));
  const apiKey = "7JgJw9MiV9TLvkvmRrUz3JPav9gt7yfY";
  const apiSecret =
    "41pYN4S8LkeNuPbGzh97ruueBAoKKj5Pi5G6jv2YBxckncvygMxRxjXmTXw7Dv9Y";

  const client = new AutotaskClient({ apiKey, apiSecret });
  const { autotaskId } = await client.create({
    name: "testAutotasks",
    encodedZippedCode: await client.getEncodedZippedCodeFromFolder(
      "./autotasks/relay"
    ),
    relayerId: relayerId,
    trigger: {
      type: "webhook",
    },
    paused: false,
  });
  console.log("Autotask created with ID ", autotaskId);
  appendFileSync(".env", `\nAUTOTASK_ID="${autotaskId}"`, function (err) {
    if (err) throw err;
  });
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
