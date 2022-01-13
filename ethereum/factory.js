import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5a01DF86978b85696acB3EE4d4ef5bad0487D373"
);

export default instance;
