(function () {
  "use strict";
  $(function () {
    $(".menu-container").html(`
      <div class="menu">
        <div class="menu-table flex-row-space-between">
          <a class="menu-title" href="index.html" style="font-size: 1.8rem; font-weight: 700;">Fern Bromley</a>
          <img src="menu.png">
          <div class="menu-items flex-row-center flex-item">
            <a class="menu-home" href="index.html">Home</a>
            <a class="menu-about" href="about.html">About me</a>
            <a class="menu-research" href="research.html">Research</a>
            <a href="https://github.com/fernbro">GitHub</a>
          </div>
        </div>
      </div>
    `);
  });
})();
