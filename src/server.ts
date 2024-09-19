import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const port = config.port || 8000;

const main = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(port, () => {
      console.log("app is listening on port " + port);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
