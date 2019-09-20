function openPage(argument1) 
{
  let path = "";

  if (argument1 == "home") { path = "/index.php"; }
  else if (argument1 == "courses") { path = "/courses.php"; }
  else if (argument1 == "csharp") { path = "/csharp.php"; }
  else if (argument1 == "mssql") { path = "/mssql.php"; }

  // C++
  else if (argument1 == "cplusplus") { path = "/app/cplusplus/cpp.php"; }
  else if (argument1 == "cplusplus_functions") { path = "/app/cplusplus/functions.php"; }
  else if (argument1 == "cplusplus_solutions_io") { path = "/app/cplusplus/solutions/io.php"; }
  else if (argument1 == "cplusplus_solutions_algebra") { path = "/app/cplusplus/solutions/algebra.php"; }

  location.href = path;

}