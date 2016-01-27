var a  = [
  function a(d) {
    return new Promise(function (resolve) {
      resolve(d+1);
    });
  },
  function b(d) {
    return new Promise(function (resolve) {
      resolve(d+2)
    });
  },
  function c(d) {
    return new Promise(function (resolve) {
      resolve(d+3)
    });
  },
  function dd(d) {
    return new Promise(function (resolve) {
      resolve(d+3)
    });
  },
  function e(d) {
    return new Promise(function (resolve) {
      resolve(d+3)
    });
  },
];

var ss = function (d) {
  return a.reduce(function (i,next) {
    console.log(i,next);
    return i.then(next)
  },new Promise(function (resolve) {
      resolve(d);
    })
  );
};

ss(11).then(function (d) {
  console.log(d);
})
