(function() {
    // تحميل مكتبة HLS.js لدعم M3U8
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest';
    script.onload = initPlayer;
    document.head.appendChild(script);

    function initPlayer() {
        window.ArabStreamPlayer = class {
            constructor({ containerId, sources }) {
                this.container = document.getElementById(containerId);
                this.sources = sources; // قائمة السيرفرات
                this.video = document.createElement('video');
                this.video.setAttribute('controls', 'true');
                this.video.style.width = '100%';
                this.video.style.borderRadius = '10px';
                this.container.appendChild(this.video);
                this.initPlayer();
            }

            initPlayer() {
                if (this.sources.length > 0) {
                    const firstSource = this.sources[0];
                    this.loadSource(firstSource);
                }
                this.createServerSwitcher();
            }

            loadSource(source) {
                if (Hls.isSupported() && source.type === 'application/x-mpegURL') {
                    const hls = new Hls();
                    hls.loadSource(source.url);
                    hls.attachMedia(this.video);
                } else {
                    this.video.src = source.url;
                    this.video.play();
                }
            }

            createServerSwitcher() {
                const serverSwitcher = document.createElement('div');
                serverSwitcher.style.marginTop = '10px';

                this.sources.forEach((source, index) => {
                    const button = document.createElement('button');
                    button.textContent = `سيرفر ${index + 1}`;
                    button.style.margin = '5px';
                    button.style.padding = '8px 12px';
                    button.style.backgroundColor = '#0F4551';
                    button.style.color = '#fff';
                    button.style.border = 'none';
                    button.style.borderRadius = '5px';
                    button.style.cursor = 'pointer';

                    button.onclick = () => {
                        this.loadSource(source);
                    };

                    serverSwitcher.appendChild(button);
                });

                this.container.appendChild(serverSwitcher);
            }
        };
    }
})();
