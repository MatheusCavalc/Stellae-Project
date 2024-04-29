<template>
    <div class="overflow-x-hidden py-5 bg-cyan-300">
        <div id="scroll-text">
            <div class="flex gap-10">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
                <img src="../assets/images/logo-stellae.png" class="h-8 w-12">
                <p class="text-nowrap mt-0.5">#BeStellae</p>
            </div>
            <div>
            </div>
        </div>
    </div>
</template>

<style>

#scroll-text {
    /* animation properties */
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);

    -moz-animation: my-animation 20s linear infinite;
    -webkit-animation: my-animation 20s linear infinite;
    animation: my-animation 20s linear infinite;
}

/* for Firefox */
@-moz-keyframes my-animation {
    from {
        -moz-transform: translateX(100%);
    }

    to {
        -moz-transform: translateX(-100%);
    }
}

/* for Chrome */
@-webkit-keyframes my-animation {
    from {
        -webkit-transform: translateX(100%);
    }

    to {
        -webkit-transform: translateX(-100%);
    }
}

@keyframes my-animation {
    from {
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    to {
        -moz-transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
}
</style>