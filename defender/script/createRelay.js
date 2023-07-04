const { RelayClient } = require("defender-relay-client");
const { appendFileSync, writeFileSync } = require("fs");

async function run() {
  require("dotenv").config();
  const apiKey = process.env.TEAM_API_KEY;
  const apiSecret = process.env.TEAM_API_SECRET_KEY;
  const relayClient = new RelayClient({ apiKey, apiSecret });

  // create relay using defender client
  const requestParams = {
    name: "testRelayCreate",
    network: "mumbai",
    minBalance: BigInt(1e17).toString(),
  };
  const relayer = await relayClient.create(requestParams);

  // store relayer info in file - ID is all you need if sending tx via autotask
  writeFileSync(
    "relay.json",
    JSON.stringify(
      {
        relayer,
      },
      null,
      2
    )
  );
  console.log("Relayer ID: ", relayer.relayerId);

  // create and save the api key to .env - needed for sending tx directly
  const { apiKey: relayerKey, secretKey: relayerSecret } =
    await relayClient.createKey(relayer.relayerId);
  appendFileSync(
    ".env",
    `\nREACT_APP_RELAYER_API_KEY=${relayerKey}\nREACT_APP_RELAYER_API_SECRET=${relayerSecret}`
  );
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
