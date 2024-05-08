|
V
+-- call -----------> readFile("./news.txt")-------+
|                        |                         |  
|                        +-- open './news.txt'     |
|                        |                         |
|                        +-- read ...              |
|                        |                         |
|                        +-- resolve(content)------------+
v                                                 |      |
+<---------------------return Promise <fulfieled>-+      |
|             +------------------------------------------+ 
|             |       
v             v
+ data = await
|
v
+console.log(data.toString())

==========================================================================

|
V
+-- call -----------> writeFile("./news.txt", title)-------+
                         |                                 |  
                         +-- create './news.txt'           |
                         |                                 |
                         +-- write ...                     |
                         |                                 |
                         +-- resolve()                     |
                                                           |
<---------------------return Promise <fullfilled>----------+              







==============================================================================


|
V
+-- call -----------> writeFile("./news.json", JSON.stringify(news))
                         |                         |               |
                         +-- create './news.json'  |               |
                         |                         |               |
                         +-- write ...             |               |
                         |     ^                   |               |
                         |     |                   v               |
                         |     +----------- convert to string      |
                         |                                         |
                         +-- resolve()                             |
                                                                   |
<---------------------return Promise <fullfilled>------------------+ 