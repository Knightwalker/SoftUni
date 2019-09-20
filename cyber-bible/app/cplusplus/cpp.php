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
      <div id="cplusplus_img" class="img"></div>
      <h1>C++ Programming Language</h1>
      <div><b>I. Basics</b></div>
      <div>1. Introduction</div>
      <div>2. Data Types</div>
      <div>3. Conditions</div>
      <div>4. For-loops</div>
      <div>5. While-loops</div>
      <div>6. Functions</div>
      <div>7. Arrays</div>
      <div>8. Vectors</div>
      <br>
      <div><b>II. Functions</b></div>
      <div onclick="openPage('cplusplus_functions')">1. Functions in C++</div>
      <br>
      <div><b>III. Solutions</b></div>
      <div onclick="openPage('cplusplus_solutions_io')">1. Input / Output</div>
      <ul class="custom_ul">
         <li>consoleReadLineSplitToStringVector</li>
      </ul>
      <div onclick="openPage('cplusplus_solutions_algebra')">2. Algebra</div>
      <ul class="custom_ul">
         <li>Quadratic Equation</li>
         <li>Greatest Common Divisor</li>
      </ul>
  
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
    
  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>