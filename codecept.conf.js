const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://localhost",
      show: true,
      chromium: {

        userDataDir: './user-data-dir', // <-- esto guarda cookies y storage
    
        args: ['--start-maximized']
    
      },
    
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
     
    },
  },
  include: {
    I: "./steps_file.js",
  },
  gherkin: {
    features: "./features/*.feature",
    steps: ["./steps/loginSteps.js","./steps/musicaSteps.js"],
  },
  name: "FrameworkYGL",
};
