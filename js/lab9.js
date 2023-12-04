
        function set_arec() {
            var audioform = document.getElementById("audioform");
            var audioplayer = document.getElementById("audioplayer");
            var videoplayer = document.getElementById("videoplayer");
            audioplayer.src = "audio/" + audioform.value;
            audioplayer.play();
        }

        function set_vrec() {
            var videoform = document.getElementById("videform");
            var audioplayer = document.getElementById("audioplayer");
            var videoplayer = document.getElementById("videoplayer");
            videoplayer.src = "video/" + videoform.value;
            videoplayer.play();
        }