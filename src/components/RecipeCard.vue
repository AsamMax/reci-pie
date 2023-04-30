<script setup lang="ts">
import CoverImage from '@/components/CoverImage.vue'
</script>
<template>
    <div class="card">
        <div class="categoryBadge">
            <img src="https://cdn-icons-png.flaticon.com/512/723/723734.png" />
        </div>
        <div class="image">
            <CoverImage
                image="https://s-media-cache-ak0.pinimg.com/736x/57/98/9f/57989f2a2e186e38bf93429aa395120c.jpg"
            />
        </div>
        <div class="content">
            <h2 class="title">shakshuka</h2>
            <div class="tags">
                <span class="tag">vegeterian</span>
                <span class="tag">breakfast</span>
                <span class="tag">seasonal</span>
                <span class="tag">streetfood?</span>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.card {
    isolation: isolate;
    .categoryBadge {
        position: absolute;
        top: 0.5em;
        left: 0.5em;
        background-color: var(--color-grey);
        z-index: 1;
        border-radius: 1em;
        img {
            width: 2em;
            height: 2em;
            margin: 0.7em 1em 0.5em;
            filter: invert(1);
        }
    }
    h2 {
        text-align: center;
        font-weight: 600;
    }
    .image {
        width: 100%;
        aspect-ratio: 3/2;
        border-radius: 1em;
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        margin-top: 0.5em;
        .tag {
            padding: 0.25em 0.5em;
            border-radius: 0.5em;
            // loop from 1 to 4
            @for $i from 1 through 4 {
                &:nth-child(#{$i}) {
                    background-color: var(--color-accent-#{$i});
                }
            }
        }
    }
}
</style>
