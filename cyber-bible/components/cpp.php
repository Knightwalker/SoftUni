<?php include("../header.php") ?>

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
  
    <div id="cpp_data_types">
      <h2>Data Types</h2>
      <div>Primitive Types</div>
      <table>
         <tr>
            <th>Type</th>
            <th>Keyword</th>
         </tr>
         <tr>
            <td>Boolean</td>
            <td>bool</td>
         </tr>
         <tr>
            <td>Character</td>
            <td>char</td>
         </tr>
         <tr>
            <td>Integer</td>
            <td>int</td>
         </tr>
         <tr>
            <td>Floating Point</td>
            <td>float</td>
         </tr>
         <tr>
            <td>Double floating point</td>
            <td>double</td>
         </tr>
      </table>
    </div>

    <div id="cpp_quadratic_equation">
      <h1>Algebra</h1>
      <h2>Quadratic Equation</h2>
      <table class="code_table">
         <tr>
            <th>Input</th>
            <th>Output</th>
         </tr>
         <tr>
            <td>2 5 -3</td>
            <td>0.5 -3</td>
         </tr>
         <tr>
            <td>10 1 3</td>
            <td>no roots</td>
         </tr>
      </table>
      <br>
      <code code-include="/code/quadratic_equation.cpp"></code>
    </div>

    <div id="cpp_greatest_common_divisor">
      <h1>Algebra</h1>
      <h2>Greatest Common Divisor</h2>
      <table class="code_table">
         <tr>
            <th>Input</th>
            <th>Output</th>
         </tr>
         <tr>
            <td>10 25</td>
            <td>50 50</td>
         </tr>
         <tr>
            <td>5</td>
            <td>50</td>
         </tr>
      </table>
      <br>
      <code code-include="/code/greatest_common_divisor.cpp"></code>
    </div>

  </div>
</div>

<?php include("../footer.php") ?>