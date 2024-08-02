import { CountUp } from "../node_modules/countup.js/dist/countUp.min.js";

window.onload = function () {
  const clientValue = document
    .querySelector("#count-client")
    .getAttribute("data-value");
  var client = new CountUp("count-client", clientValue, {
    enableScrollSpy: true,
  });
  client.start();

  const partnerValue = document
    .querySelector("#count-partner")
    .getAttribute("data-value");
  var partner = new CountUp("count-partner", partnerValue, {
    enableScrollSpy: true,
  });
  partner.start();

  const projectValue = document
    .querySelector("#count-project")
    .getAttribute("data-value");
  var partner = new CountUp("count-project", projectValue, {
    enableScrollSpy: true,
  });
  partner.start();
};
