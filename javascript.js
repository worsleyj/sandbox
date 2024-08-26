let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});
promise.finally(() => console.log("completed"));

promise.then(
  (result) => alert(result), // doesn't run
  (error) => alert(error)
);
