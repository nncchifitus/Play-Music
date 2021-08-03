const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
const undoBtn = $('.btn-undo')
const redoBtn = $('.btn-redo')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'Nevada',
            singer: 'Vicetone',
            path: './assets/audio/song1.mp3',
            image: './assets/img/song1.jpg',
        },
        {
            name: 'Light It Up',
            singer: 'Robin Hustin x TobiMorrow',
            path: 'https://aredir.nixcdn.com/NhacCuaTui968/LightItUp-RobinHustinTobimorrowJex-5619031.mp3?st=kzpVQ5kKnf2LlcAqM6lnxg&e=1623143881',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2019/01/08/1/3/d/a/1546913843457_640.jpg',
        },
        {
            name: 'Yoru ni kakeru',
            singer: 'YOASOBI',
            path: 'https://aredir.nixcdn.com/NhacCuaTui992/YoruNiKakeru-YOASOBI-6149490.mp3?st=68hnFhtGF6RukKDcDcW9Mw&e=1623132179',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16788ee5-3436-474a-84fd-6616063a1a9a/de2f4eq-bc67fa17-8dae-46a9-b85d-fe8082c34841.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2Nzg4ZWU1LTM0MzYtNDc0YS04NGZkLTY2MTYwNjNhMWE5YVwvZGUyZjRlcS1iYzY3ZmExNy04ZGFlLTQ2YTktYjg1ZC1mZTgwODJjMzQ4NDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dABuqANeQEs6FBfslZHdG1lW_gDwzf61yqiSABROSx0',
        },
        {
            name: 'Muộn rồi mà sao còn',
            singer: 'Sơn Tùng M-TP',
            path: 'https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=w9AA-eyRI7yD_VYGfvVWeQ&e=1623141624',
            image: 'https://pbs.twimg.com/media/Ez5jRyVVgAQN6Kh.jpg',
        },
        {
            name: 'See You Again',
            singer: 'Charlie Puth ft Wiz Khalifa',
            path: './assets/audio/song5.mp3',
            image: './assets/img/song5.jpg',
        },

        {
            name: 'Symphony',
            singer: 'Clean Bandit',
            path: 'https://aredir.nixcdn.com/Sony_Audio37/Symphony-CleanBanditZaraLarsson-4822950.mp3?st=sPgJSXtRXYpT_rznXyez6g&e=1623144426',
            image: 'https://i.ytimg.com/vi/PIf9GvWaxQQ/maxresdefault.jpg',
        },
        {
            name: 'Waiting For Love',
            singer: 'Avicii',
            path: 'https://aredir.nixcdn.com/Unv_Audio45/WaitingForLove-Avicii-4203283.mp3?st=mXGv6kIqbxg_coAyUqzlnw&e=1623144462',
            image: 'https://i.ytimg.com/vi/Hmbm3G-Q444/maxresdefault.jpg',
        },
        {
            name: 'Alone',
            singer: 'Marshmello',
            path: 'https://aredir.nixcdn.com/NhacCuaTui927/Alone-Marshmello-4456939.mp3?st=RTsMC9tNcKEi8fd0iKtdaA&e=1623144502',
            image: 'https://i.ytimg.com/vi/UNB8F0ObA4g/maxresdefault.jpg',
        },
        {
            name: 'Something Just Like This',
            singer: 'The Chainsmokers & Coldplay',
            path: 'https://aredir.nixcdn.com/Sony_Audio39/SomethingJustLikeThis-TheChainsmokersColdplay-5337136.mp3?st=VQuH6VgNsPlBizbk-c7n3w&e=1623144556',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2017/11/07/a/1/4/5/1510038809679_640.jpg',
        },
        {
            name: 'Sugar',
            singer: 'Maroon 5',
            path: 'https://aredir.nixcdn.com/Unv_Audio73/Sugar-Maroon5-3338455.mp3?st=3FUWEyikJePPeAuREUcw9g&e=1623144644',
            image: 'https://i.ytimg.com/vi/7vw84EkHOlY/maxresdefault.jpg',
        },
        {
            name: 'Từ chối nhẹ nhàng',
            singer: 'Phúc Du feat. Bích Phương',
            path: './assets/audio/song10.mp3',
            image: './assets/img/song10.jpg',
        },
        {
            name: 'Sugar',
            singer: 'Robin Schulz ft Francesco Yates',
            path: './assets/audio/song11.mp3',
            image: './assets/img/song11.jpg',
        },
    ],

    // Render songs
    render: function () {

        const htmls = this.songs.map(function (song, index) {
            return `
            <div class="song" data-index=${index}>
                <div class="thumb"
                    style="background-image: url(${song.image})">
                </div>
                <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })

        // htmls[this.currentIndex] = htmls[this.currentIndex].replace('class="song"', 'class="song active"')
        playlist.innerHTML = htmls.join('')
        const songs = $('.song')
        songs.classList.add('active')
    },

    handleEvents: function () {
        const _this = this
        const cdWidth = cd.offsetWidth
        const songs = $$('.song')
        const options = $$('.option')
        
        // Handle Scroll top
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth >= 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Handle click play video btn
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause()
            }
            else {
                audio.play()
            }
        }

        // When play song
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimation.play()
        }

        // when pause song
        audio.onpause = function () {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimation.pause()
        }

        // Update progress
        audio.ontimeupdate = function () {
            if (audio.duration) {
                percent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = percent
            }
        }

        // Seek progress
        progress.oninput = function (e) {
            audio.currentTime = e.target.value * audio.duration / 100
        }

        // Handle CD rotate
        const cdThumbAnimation = cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 10000,
            iterations: Infinity,
        })
        cdThumbAnimation.pause()

        // Handle nextSong
        nextBtn.onclick = function () {
            songs[_this.currentIndex].classList.remove('active')
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.nextSong()
            }
            songs[_this.currentIndex].classList.add('active')
            audio.play()
            _this.scrollToActiveSong()
        }

        // Handle prevSong
        prevBtn.onclick = function () {
            songs[_this.currentIndex].classList.remove('active')
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.prevSong()
            }
            songs[_this.currentIndex].classList.add('active')
            audio.play()
            _this.scrollToActiveSong()
        }

        // Handle random song
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Handle when audio ended
            audio.onended = function () {
            if (_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }

        // Handle when repeat song
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        // Handle when click playlist
        playlist.onclick = function (e) {

            // Find element song not active and not option in playlist
            song = e.target.closest('.song:not(.active)')
            if (song && !e.target.closest('.option')) {
                songs[_this.currentIndex].classList.remove('active')
                _this.currentIndex = song.dataset.index;
                songs[_this.currentIndex].classList.add('active')
                _this.loadCurrentSong()
                audio.play()
            }
        }

        // Handle seek 10 seconds
        undoBtn.onclick = function(e) {
            audio.currentTime -= 10
        }

        redoBtn.onclick = function(e) {
            audio.currentTime += 10
        }
    },

    loadCurrentSong: function () {

        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url(${this.currentSong.image})`
        audio.src = this.currentSong.path
    },

    defineProperties: function () {

        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })

    },

    nextSong: function () {

        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function () {

        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    randomSong: function () {

        do {
            randomIndex = Math.floor(Math.random() * this.songs.length)
            console.log("random: ", randomIndex)

        } while (randomIndex === this.currentIndex)
        this.currentIndex = randomIndex
        this.loadCurrentSong()
    },

    scrollToActiveSong: function () {
        setTimeout(function () {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }, 200)
    },    

    start: function () {

        this.defineProperties()

        // Render playlist
        this.render()

        // Load first song information for UI
        this.loadCurrentSong()

        // Listen and handle DOM events
        this.handleEvents()


    }
}

var main = function () {
    app.start()

}

main()

