module.exports = {
    apps : [{
      name   : "SliceUp",
      cwd: "./",
      script : "./dist/server.js",
      watch: false,
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      },
    //   instances: "max" => barcha yadrodan foydalanadi
      instances: 1,   // ishga tushadigan yadrolar soni
      exec_mode: "cluster"
    }]
  }