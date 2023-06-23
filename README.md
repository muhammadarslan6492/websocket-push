# websocket-push

## Keypoints

Request andResponse is not always ideal
1-The client desires real-time server notifications.
i: A user just logged in
ii: A message is just recived
2-Push model is good for certain casses
3-Client connects to the server
4-Server send data to the client
5-Client dose not have to request anything
6-This is two way communication protocol
7-Used by Rabbitmq

## Pros and Cons

## pros

1:Real time
2:You not need to request to server
3:Tow way communication

## cons

1:User must be online
2:The user or client may be unable to handle the load. For example, what if the client receives a large number of notifications from the server and the server does not know whether the client can handle the load
3:Requires a bidirectional protocol
4:Polling is preferred for light clients

## Authors

- **Muhammad Arslan** - [muhammadarslan6492](https://github.com/muhammadarslan6492)
