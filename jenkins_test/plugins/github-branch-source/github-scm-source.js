<<<<<<< HEAD
// We match the end of the name using $= because the beginning of the name is 
// dynamically generated to avoid name clashes.
Behaviour.specify("input[name$=_configuredByUrlRadio]", 'GitHubSCMSourceRadioConfiguration', 0, function(e) {
    if (e.gitHubSCMSourceRadioConfiguration) {
        return;
    }

    var configuredByUrlInput = e.closest('[name="source"]').querySelector('input[name="configuredByUrl"]');
    if (configuredByUrlInput) {
        e.onclick = function() {
            configuredByUrlInput.value = e.value;
            // When changing to true the event is triggered.
            if (e.value === "false") {
                // When changing to false a trigger has to be fired in order to fetch the repos from the backend
                var oEvent = document.createEvent("HTMLEvents");
                oEvent.initEvent("change");
                // Gets the first Jelly entry after the hidden value
                var repoOwner = e.closest('.radioBlock-container').querySelector('input[name="_.repoOwner"]');
                if (repoOwner != null) {
                    // fire a onchange event on the repoOwner input test to get the repos from backend
                    repoOwner.dispatchEvent(oEvent);
                } else {
                    console.warn("couldn't find repoOwner element", e)
                }
            }
        };
    }
    e.gitHubSCMSourceRadioConfiguration = true;
});
=======
version https://git-lfs.github.com/spec/v1
oid sha256:91d8c2a766da1df2d686258c65955294f9336cf93815a817c7a157347f1815db
size 1426
>>>>>>> 01a95f3 (jenkins pipelines A-B)
