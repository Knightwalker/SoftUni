<?php include($_SERVER['DOCUMENT_ROOT'] . "/header.php") ?>

<div id="cpp_grid">
  <div id="cpp_sidebar">
    <div class="sidebarButton">Introduction</div>
    <div class="sidebarButton">Data Types</div>
    <div class="sidebarButton">Variables</div>
    <div class="cpp_sidebar_h1">Solutions</div>
    <div class="cpp_sidebar_h2">Algebra</div>
    <div>Quadratic Equation</div>
    <div>Greatest Common Divisor</div>
  </div>
  <div id="cpp_main">

    <div id="cpp_quadratic_equation">
      <h1>Input / Output</h1>
      <h2>consoleReadLineSplitToStringVector</h2>
        <table class="code_table">
          <tr>
              <th>Input</th>
              <th>Output</th>
          </tr>
          <tr>
              <td>1 2 3 4 5</td>
              <td>1 2 3 4 5</td>
          </tr>
          <tr>
              <td>1,2,3,4,5</td>
              <td>1 2 3 4 5</td>
          </tr>
        </table>
        <br>
        <code code-include="/app/code/solutions/consoleReadLineSplitToStringVector.cpp"></code>
    </div>

  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>