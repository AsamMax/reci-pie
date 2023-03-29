<script setup lang="ts"></script>
// Very loosely based on https://codepen.io/THEORLAN2/pen/bpBeyv
<template>
    <article id="recipe">
        <img
            src="https://s-media-cache-ak0.pinimg.com/736x/57/98/9f/57989f2a2e186e38bf93429aa395120c.jpg"
        />
        <div id="bubbles">
            <div class="bubble">
                50 <br />
                tests
            </div>
            <div class="bubble">
                10 <br />
                sekunden
            </div>
        </div>
        <div id="text">
            <h3 id="title">Shakshuka With Feta</h3>
            <p id="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum impedit nam labore
                ratione quo quia ullam necessitatibus, veritatis id consequatur assumenda sint quas
                tempora beatae? Neque dolorem fuga nesciunt dignissimos?
            </p>
        </div>
    </article>
</template>

<style scoped lang="scss">
#recipe {
    width: min(100%, 400px);
    aspect-ratio: 5/7;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
        filter: brightness(0.5);
    }
    #bubbles {
        position: absolute;
        top: 10px;
        left: 10px;
        bottom: 10px;
        .bubble {
            background-color: var(--color-bg);
            color: var(--color-fg-accent);
            aspect-ratio: 1/1;
            border-radius: 100%;
            vertical-align: middle;
            text-align: center;
            padding-inline: 0.5rem;
            padding-top: 22.5%;
            margin-bottom: 10px;
        }
    }
    #text {
        position: absolute;
        bottom: 10px;
        left: 20px;
        right: 20px;
        #title {
            font-size: 2rem;
        }
    }
}
</style>
