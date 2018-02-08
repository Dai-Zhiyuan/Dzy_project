<?php

    // 创建连接
    $conn = new mysqli('localhost', 'root', '', 'project');

    // 设置字符集
    $conn->set_charset('utf8');
    
    // 查询Sql语句
    // 获取查询结果集（对象）
    $result = $conn->query('select * from indx');

    $row = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row);

?>