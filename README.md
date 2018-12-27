## Bjorklund

A Javascript Universal Module implementation of the Bjorklund algorithm.

## Installation

### npm

```
$ npm install bjorklund-js
```

### bower

```
$ bower install bjorklund-js
```

## Usage

```javascript
var
    steps = 5,
    pulses = 2;

console.log(bjorklund(steps, pulses)); // [ 0, 1, 0, 1, 0 ]
```

## License

This project is licensed under the MIT license.

## Resources

* E. Bjorklund, [The Theory of Rep-Rate Pattern Generation in the SNS Timing System](https://ics-web.sns.ornl.gov/timing/Rep-Rate%20Tech%20Note.pdf)
* G. T. Toussaint, [The Euclidean algorithm generates traditional musical rhythms](http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf), Proceedings of BRIDGES: Mathematical Connections in Art, Music, and Science, Banff, Alberta, Canada, July 31 to August 3, 2005, pp. 47–56.

## Changelog

### 0.1.0

First release

### 0.1.1

Add minified version

## 0.1.2

Fixed algorithm for N==k, n % k == 0, k == 0. Thanks [@colinsullivan](https://github.com/colinsullivan)
