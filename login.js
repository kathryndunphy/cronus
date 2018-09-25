$(document).ready(function () {
    // Initialize Firebase
    let config = {
        apiKey: "AIzaSyB3reRJWo9P7hijUiIV-co5TG5tUgf-dqo",
        authDomain: "cronus-41d11.firebaseapp.com",
        databaseURL: "https://cronus-41d11.firebaseio.com",
        projectId: "cronus-41d11",
        storageBucket: "cronus-41d11.appspot.com",
        messagingSenderId: "242046643747"
    };
    firebase.initializeApp(config);

    let email = $("#email-input");
    let password = $("#password-input");
    let loginButton = $(".login-button");
    let signUpButton = $(".signup-button");
    let loginModalButton = $(".login-modal-button");
    let signUpModalButton = $(".signup-modal-button");
    let signOutButton = $(".signout-button");
    let signUpEmail = $("#signup-email-input");
    let signUpPassword = $("#signup-password-input");

    const loginButtonClick = function () {
        let emailValue = email.val();
        let passwordValue = password.val();
        if (firebase.auth().currentUser) {
            // Signout
            firebase.auth().signOut();
        } else {
            if (emailValue.length < 4) {
                alert('Please enter an email address.');
                return;
            }
            if (passwordValue.length < 4) {
                alert('Please enter a password.');
                return;
            }
            // Sign in with email and pass.
            firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue).catch(function (error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        }
        $("#loginModal").modal("hide");
        email.val("");
        password.val("");
    };

    const signUpButtonClick = function () {
        let emailValue = signUpEmail.val();
        let passwordValue = signUpPassword.val();
        if (emailValue.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (passwordValue.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign up and in with email and pass.
        firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
        $("#signUpModal").modal("hide");
        email.val("");
        password.val("");
    };

    const signOutButtonClick = function () {
        firebase.auth().signOut();
    };

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            loginModalButton.hide();
            signUpModalButton.hide();
            signOutButton.prop("hidden", false);
            $("h1.display-4").html("logged in!");
            $("#signUpModal").modal("hide");
        } else {
            // User is signed out.
            signOutButton.prop("hidden", true);
            loginModalButton.show();
            signUpModalButton.show();
            $("h1.display-4").html("Hello, world!");
        }
    });
    loginButton.on("click", loginButtonClick);
    signUpButton.on("click", signUpButtonClick);
    signOutButton.on("click", signOutButtonClick);
});