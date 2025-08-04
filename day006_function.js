let params = 100;
function myn(params) {
  if (params != 0) {
    console.log(params);
    --params;
    myn(params)
  }
}
myn(params)
