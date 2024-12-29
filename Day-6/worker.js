onmessage = function(e) {
    const nums = e.data;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    postMessage(sum);
}