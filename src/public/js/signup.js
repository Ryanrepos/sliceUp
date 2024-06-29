console.log("Signup frontend javascript file");

$(function () {
    // jQuery methods go here...

    const fileTarget = $(".file-box .upload-hidden");
    let fileName;

    fileTarget.on("change", function () {
        if (window.FileReader) {
            const uploadFile = $(this)[0].files[0];
            console.log("uploadFile:", uploadFile);
            const fileType = uploadFile["type"];

            // allowing image types
            const validImageType = ["image/jpg", "image/jpeg", "image/png"];

            if (!validImageType.includes(fileType)) {
                alert("Please, insert only jpg, jpeg and png!")
            } else {
                if (uploadFile) {
                    console.log(URL.createObjectURL(uploadFile));
                    $(".upload-img-frame").attr("src", URL.createObjectURL(uploadFile)).addClass("success");
                }
                fileName = $(this)[0].files[0].name;
            }
            // image ni nomini kiritadi..
            $(this).siblings(".upload-name").val(fileName);
        }
    });

});

function validateSignupForm() {

    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();

    if (memberNick === "" || memberPhone === "" || memberPassword === "" || confirmPassword === "") {
        alert("Please, insert all required inputs!");
        return false;
    }

    if (memberPassword !== confirmPassword) {
        alert("Password differs, please check!");
        return false;
    }

    // Image validation..
    const memberImage = $(".member-image").get(0).files[0] ? $(".member-image").ge(0).files[0].name : null;

    if (!memberImage) {
        console.log("Please insert restaurant image");
        return false;
    }

}