<?php 
    // echo "hello world".$_GET["name"];
    // 连接数据库
    $con = mysql_connect("localhost:3306","laoli","12345678");
    //echo $con;
    mysql_select_db("cq1701", $con);
    $result = mysql_query("select * from students", $con);
    //echo $result;
    print_r(mysql_fetch_array($result));
    $arr = mysql_fetch_array($result);
    echo $arr[0];
    // while($row = mysql_fetch_array($result, MYSQL_ASSOC))
    // {
    //   printf($row);
    // }
?>