(function () {
  "use strict";
  $(function () {
    $(".menu-container").html(`
      <div class="menu">
        <div class="menu-table">
          <a class="menu-title" href="index.html" style="font-size: 1.8rem; font-weight: 700;">Fern Bromley</a>
          <div class="menu-items flex-row-center flex-item">
            <a class="menu-home" href="index.html">Home</a>
            <a class="menu-about" href="about.html">About me</a>
            <a class="menu-research" href="research.html">Research</a>
            <a href="https://github.com/fernbro">GitHub</a>
            <a href="https://orcid.org/0000-0003-0596-1487">ORCID</a>
          </div>
        </div>
      </div>
    `);
  });
})();
