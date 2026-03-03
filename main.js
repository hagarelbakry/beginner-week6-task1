let btn = document.getElementById('btn');

btn.onclick = function() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    Swal.fire({
    title: "Current Time",
    text: `Current Time: ${hours}:${minutes}:${seconds}`
    });
};

//                      OR

// btn.addEventListener('click', function() {
// let currentTime = new Date();
//     let hours = currentTime.getHours();
//     let minutes = currentTime.getMinutes();
//     let seconds = currentTime.getSeconds();

//     alert(`Current Time: ${hours}:${minutes}:${seconds}`);
// });