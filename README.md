# Skill assessment for Kofile

[Task described here](challenge.md)

## Part 1:
```shell
node part1.js
```
## Part 2:
```shell
node part2.js
```
## Part 3:
```shell
node part3.js
wget --post-file orders.json http://localhost:1212/prices
cat prices
wget --post-file orders.json http://localhost:1212/funds
cat funds
```

Both endpoints echo the JSON orders given as input with fee info
added. The prices endpoint adds a total attribute on each order and a
price attribute on each order_item for each order. The funds endpoint
adds a list of { name:FUND_NAME, amount:VALUE } objects in a funds
attribute on each order. 

I wrote this to use no dependencies so it's easy to run. For any
significant project I would use expressjs.com framework for building
a server using Node.

TODO: test code
