<template>

<!-- Alert Error -->
    <div
         class="bg-red-200 pl-6 py-3 rounded-md text-lg items-center w-96 absolute hidden"
         >
      <svg
           viewBox="0 0 24 24"
           class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
           >
        <path
              fill="currentColor"
              d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
              ></path>
      </svg>
      <span class="text-red-800"> Nenhum resultado foi encontrado. </span>
    </div>
    <!-- End Alert Error -->



  <section class="bg-cover w-full lg:w-screen h-screen" id="background">
    <br />
    <header id="header" class="bg-white w-10/12 h-10 rounded text-center ml-10 mt-1 pt-1 lg:w-11/12 lg:ml-16 lg:h-12  ">
      <h3  id="texto-header" class="text-xl font-sans lg:text-2xl"><b>BUSQUE POR UM ESTADO</b></h3>
    </header>

    <Preloader> </Preloader>

<div class="block">
    <section id="interface" class="ml-12" >
      <div id="imagens" >
        <div id="icons" class="hidden lg:w-7/12 lg:flex">
          <img class="mt-2 mr-4" src="../images/Ilustrações.png" alt="ilustrações" />
        </div>

   
        <div id="mapa" class="absolute mr-5 mt-2 lg:pt-12 lg:ml-6 lg:pl-10">
          <svg
            id="brasil"
            class="w-72 mt-4 lg:w-mp"
            viewBox="0 0 869 864"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_7:22)">
              <a xlink:title="SC" class="pointer" @click="getStateList('SC'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M440.873 841.488L430.198 842.952L432.145 834.712L436.813 831.729L434.477 815.518L429.418 814.48L423.97 804.494L423.19 795.286L415.019 791.914L402.178 791.654L389.727 784.392L387.002 777.518L375.718 770.644L357.82 768.051L378.05 745.615L379.605 735.628L390.886 720.196L402.363 713.355L402.557 704.568L422.983 700.84L462.861 701.78L508.576 727.62L511.493 749.18L502.739 769.573L495.396 775.255L488.831 786.773L484.21 796.346L461.657 809.632L457.39 817.861L454.289 831.148L446.414 834.178L440.873 841.488V841.488V841.488Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="SC" class="pointer" @click="getStateList('SC'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M518.417 745.867L511.936 748.207L508.97 727.222L461.65 700.79L420.945 701.204L414.477 702.006L427.851 694.249L431.887 687.271L431.644 679.125L461.748 678.76L472.787 684.62L483.438 686.201L491.365 682.334L497.347 676.134L520.058 675.38L538.49 671.903L532.411 682.043L531.377 728.736L522.173 737.301L518.417 745.867V745.867V745.867V745.867Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="PR" class="pointer" @click="getStateList('PR'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M539.669 670.59L543.659 668.182L549.209 664.719L542.283 659.788L530.22 658.16L510.084 615.434L468.665 596.559L452.932 595.665L419.219 625.594L419.632 664.696L420.412 668.939L432.2 668.411L431.879 678.892L462.014 678.732L470.867 683.709L483.756 686.117L493.136 681.083L498.112 675.315L519.808 675.154L539.669 670.59V670.59V670.59Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="SP" class="pointer" @click="getStateList('SP'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M543.407 660.052L549.576 663.985L561.892 652.369L564.667 642.221L576.616 637.577L594.802 634.767L599.412 632.692L601.086 626.947L610.099 627.073L619.479 613.989L620.42 608.611L610.351 601.765L596.614 607.762L586.913 612.292L578.68 611.317L577.785 582.455L564.782 552.492L531.229 552.251L511.254 538.8L490.911 537.091L491.485 547.492L486.554 547.985L474.651 562.055L473.023 582.363L454.148 595.332L469.399 596.192L510.336 615.4L530.358 658.825L543.407 660.052H543.407V660.052Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="RJ" class="pointer" @click="getStateList('RJ'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M610.856 626.924L619.174 613.635L619.995 608.749L610.542 601.294L620.17 600.444L638.238 599.227L650.434 595.808L659.328 590.922L666.755 581.999L674.181 571.242L692.983 589.84L693.648 601.559L689.841 606.65L673.558 610.641L670.851 617.934L667.778 620.456L623.607 620.778L621.635 626.236L610.856 626.924V626.924V626.924V626.924Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="ES" class="pointer" @click="getStateList('ES'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M692.915 589.228L694.708 586.639L698.541 585.146L704.366 585.643L706.606 580.167L707.452 572.301L711.634 566.924L719.202 557.764L721.99 544.024L721.591 533.469L724.379 524.11L722.786 517.14L714.821 515.348L704.266 511.763H696.102L695.305 536.058L691.522 546.015L685.946 557.764L673.998 559.158L674.396 570.907L692.916 589.228H692.915V589.228Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a class="pointer" @click="getStateList('BA'); showModal = true" xlink:title="BA">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M729.352 516.617L722.747 516.109L708.743 502.867L705.408 492.673L722.398 476.89L719.572 469.745L697.945 451.421L683.941 451.898L665.871 440.18L640.18 439.132L637.862 427.414L612.171 445.673L595.118 446.658L596.357 361.265L583.368 361.233L601.882 338.845L613.283 338.813L622.865 354.81L641.594 344.386L651.176 334.47L641.132 321.608L691.552 321.448L702.849 311.126L708.048 311.983L718.836 326.558L742.835 307.09L765.31 321.666L765.896 340.763L777.153 341.569L776.723 349.488L764.607 350.802L764.685 364.31L774.417 373.245L783.133 376.083L781.301 382.98L774.896 386.828L774.08 395.757L769.708 399.605L764.827 405.485L755.881 410.349L747.952 411.149L750.835 419.378L750.162 466.732L744.407 472.421L742.209 479.126L740.519 491.42L737.305 498.634L736.632 514.993L729.353 516.617V516.617H729.352V516.617Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="MG" class="pointer" @click="getStateList('MG'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M582.025 436.429L594.371 436.289L595.553 446.13L612.642 445.177L638.31 426.862L640.625 438.641L666.294 439.662L684.404 451.373L698.43 450.896L720.013 469.211L722.872 476.36L705.851 492.156L709.187 502.368L723.213 516.088L715.247 514.828L704.694 511.22H696.524L695.775 535.526L691.962 545.466L686.379 557.245L674.464 558.607L674.77 570.556L667.179 581.484L659.757 590.403L650.906 595.305L638.719 598.709L620.608 599.935L611.008 600.752L616.659 605.245L610.804 601.228L597.051 607.22L587.383 611.782L579.144 610.828L578.259 581.96L565.255 552.003L531.689 551.73L511.74 538.249L491.382 536.547L516.466 513.718L559.849 512.612L561.391 491.876L573.214 472.587L574.04 449.717L581.99 449.801L582.025 436.429V436.429V436.429V436.429Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="SE" class="pointer" @click="getStateList('SE'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M793.456 366.898L782.586 376.301L775.017 373.228L764.881 365.017L763.55 350.936L776.898 349.698L788.411 350.294L803.96 352.725L793.456 366.898V366.898Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="AL" class="pointer" @click="getStateList('AL');showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M789.129 350.401L804.217 352.343L813.33 350.488L814.379 341.535L823.492 339.035L830.025 325.567L831.074 319.518L814.056 324.76L798.007 326.454L791.242 323.883L786.091 319.377L782.23 315.516L777.723 315.848L771.281 319.73L765.807 322.321L765.817 340.719L777.351 341.365L776.95 349.754L789.129 350.401V350.401Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="PE" class="pointer" @click="getStateList('PE'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M830.993 319.437L836.8 315.889L841.278 304.212L841.563 284.47L831.202 293.117L813.421 294.022L799.511 304.282L789.796 280.67L773.95 293.188L763.589 282.479L752.964 295.202L738.789 280.181L719.776 280.644L719.473 295.948L706.912 306.735L708.223 312.038L718.889 326.373L743.104 306.836L765.384 322.462L778.308 315.828L783.812 316.937L791.898 323.853L799.66 326.252L815.165 324.135L830.993 319.437V319.437V319.437Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="PB" class="pointer" @click="getStateList('PB'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M805.911 270.857L806.083 259.626L841.806 266.9L841.578 285.061L831.217 293.708L813.436 294.613L799.527 304.873L789.811 281.26L773.965 293.779L763.604 283.07L754.762 263.663L761.291 255.04L773.986 262.981L793.529 257.185L794.693 270.433L805.911 270.858H805.911V270.857V270.857Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a
                id="RN"
                xlink:title="RN"
                class="pointer"
                @click="getStateList('RN'); showModal = true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M841.603 266.692L842.301 255.946L837.801 249.618L835.04 232.545L800.568 232.106L784.031 220.491L761.028 255.125L774.674 262.988L793.258 257.594L794.687 270.395L805.994 270.98L806.384 259.349L841.603 266.692V266.692H841.603V266.692Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="CE" class="pointer" @click="getStateList('CE'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M720.22 280.727L705.08 183.03C740.321 180.355 765.425 200.033 784.29 220.231L754.855 263.67L763.627 283.196L753.685 294.665L738.545 280.142L720.22 280.727V280.727V280.727Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="PI" class="pointer" @click="getStateList('PI'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M613.525 338.821L602.217 339.344L602.607 310.829C610.101 284.214 628.772 267.997 653.941 259.057L667.067 258.748L667.977 219.971L692.409 179.749L705.145 182.933L720.22 279.688L719.96 295.868L706.705 305.809L708.264 312.372L703.066 310.764L691.629 321.372L641.985 322.103L651.667 334.632L641.595 344.302L622.426 355.011L613.525 338.821H613.525V338.821Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="MA" class="pointer" @click="getStateList('MA'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M568.485 234.35L569.168 280.16L580.154 288.93L591.528 289.293L591.285 300.352L580.111 300.832L581.158 320.363L592.083 339.437L601.751 338.809L602.141 311.469C609.635 284.854 628.306 268.637 653.475 259.696L666.601 259.388L667.511 220.611L691.943 180.389L655.791 169.237L651.752 174.832L644.508 173L633.09 158.314L625.761 156.463L613.653 148.73L607.794 145.409L597.415 144.119L581.155 196.863L552.03 223.51L568.485 234.35V234.35L568.485 234.35V234.35Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="TO" class="pointer" @click="getStateList('TO'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M555.903 234.635H539.77L552.728 223.136L568.089 234.292L569.376 279.773L580.961 289.213L591.516 289.041L591.43 300.54L580.017 300.368L580.907 319.14L591.409 339.285L602.398 338.491L583.578 361.039L596.139 360.932L596 388.285L570.802 401.908L548.731 402.109L539.36 393.729L532.735 393.586L525.766 403.399L511.933 396.735L511.143 376.341L500.399 387.183L496.34 386.632L496.4 366.516L505.385 329.237L529.856 295.718L543.344 259.11L551.34 243.096L555.903 234.635V234.635V234.635Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="DF" class="pointer" @click="getStateList('DF'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M573.533 465.053L573.943 449.587L548.266 445.301L547.632 465.761L573.533 465.053V465.053Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="GO" class="pointer" @click="getStateList('GO'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M497.344 398.284L496.502 386.307L500.587 386.852L511.344 376.026L512.093 396.384L525.983 403.056L532.927 393.252L539.532 393.388L548.927 401.762L570.987 401.558L596.111 387.941L595.362 442.409L594.545 435.941L582.221 436.077L582.153 449.49L574.255 449.354L573.847 460.656L574.119 449.218L548.451 444.928L547.838 465.422L573.642 464.741L573.37 472.231L561.591 491.567L560.025 512.265L516.655 513.354L491.6 536.231L449.244 503.479L449.032 467.709L494.048 407.54L497.344 398.284V398.284V398.284Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="MS" class="pointer" @click="getStateList('MS'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M491.814 536.299L491.678 547.533L486.776 548.009L474.861 562.103L473.227 582.392L454.367 595.397L419.439 625.627L401.348 631.296L402.292 605.266L394.195 605.155L392.728 598.715L384.329 598.605L384.651 594.459L350.614 594.534L347.319 587.977L350.655 573.584L349.981 518.315L356.079 502.875L364.889 490.45L370.083 484.957L392.757 485.491L407.537 496.034L423.824 496.027L431.069 489.089L434.462 486.676L434.54 503.251L449.465 503.55L491.814 536.299V536.299V536.299Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="MT" class="pointer" @click="getStateList('MT'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M289.845 419.159L287.228 410.819L308.127 371.922L297.612 371.235L289.975 360.642L300.105 360.323L299.915 352.065L267.178 352.142L266.591 306.575L329.908 307.049L341.625 272.595L357.312 309.188L505.341 329.166L496.353 366.477L496.285 386.562H496.422L497.238 398.273L493.97 407.464L448.966 467.652L449.17 503.464L449.238 503.533L434.464 503.192L434.396 486.647L430.991 489.03L423.774 495.975H407.434L392.659 485.422L369.987 484.877L364.812 490.392L356.029 502.852L353.49 509.121L348.989 505.069L344.344 487.231L335.769 480.208L333.148 475.169L332.114 465.368L297.74 465.49L295.071 449.68L288.565 439.023L293.491 434.861L297.725 434.13L296.897 421.592L289.844 419.159H289.845V419.159Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="PA" class="pointer" @click="getStateList('PA');showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M386.73 64.9856L403.595 65.8502L412.952 63.164L413.605 81.9804L428.594 82.878L471.74 142.14L482.633 142.525L483.286 126.528L510.562 100.803L513.775 116.548L524.9 116.649L527.701 121L552.472 122.633L543.335 134.872L542.774 146.857L548.742 151.093L555.212 146.695L559.476 132.858L588.947 132.593L597.54 144.611L581.268 197.309L552.127 223.998L552.264 224.134L539.872 235.096H556.008L551.447 243.607L543.481 259.607L530 296.169L504.876 329.496L357.403 309.65L341.744 273.088L332.081 260.438L383.442 160.128L337.367 141.974L322.947 110.163L329.398 87.0086L347.624 85.8684L354.074 80.1205L386.123 78.4683L386.73 64.9856V64.9856L386.73 64.9856V64.9856Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="AP" class="pointer" @click="getStateList('AP');showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M413.034 63.6063L413.687 82.4227L428.676 83.3203L471.822 142.582L482.715 142.968L483.368 126.97L510.644 101.246L516.385 91.1795L517.86 83.2611L510.288 71.7463L496.934 70.6393L484.351 24.4314L479.567 23.8656L457.051 68.4007L413.034 63.6063H413.034V63.6063Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="RR" class="pointer" @click="getStateList('RR');showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M296.548 0.902076L288.537 0.862671L276.006 19.5968L264.114 21.2719L259.718 26.7537L245.083 27.5737L241.965 35.2844L236.807 31.7835L224.434 31.8002L217.666 25.1917L205.293 21.1314L193.154 17.6956L209.044 33.1157L211.684 63.3147L226.995 63.0928L237.72 72.5536L238.252 83.0337L247.301 93.899L246.667 99.6681L237.369 113.082L248.966 125.476L249.351 136.851L260.438 145.168L266.429 143.802L273.15 126.134L287.006 125.283L298.314 109.144L322.811 110.397L329.571 87.0814L312.7 85.788L310.734 78.3501L298.908 68.5797L303.652 16.2564L298.868 14.6713L299.285 4.6773L296.548 0.902091V0.902105L296.548 0.902076V0.902076Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="RO" class="pointer" @click="getStateList('RO');showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M251.774 400.904L287.527 411.35L308.426 371.669L297.911 370.983L290.274 360.39L300.404 360.07L300.214 351.812L267.477 352.673L266.891 307.105L258.078 306.146L242.497 287.696L228.516 287.633L170.569 325.939L179.37 326.274L186.195 328.817L189.423 333.358L186.256 344.693L186.944 358.018L195.867 371.043L204.898 379.504L224.453 390.148L251.774 400.904V400.904V400.904Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="AM" class="pointer" @click="getStateList('AM'); showModal = true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M226.124 73.1918L226.982 62.9501L237.739 72.3458L238.284 82.831L247.271 93.7246L246.658 99.5119L237.399 112.925L248.973 125.316L249.382 136.687L260.412 144.993L266.403 143.631L273.144 125.929L287.033 125.112L298.335 108.976L322.846 110.201L324.616 104.074L322.982 109.997L337.348 141.793L383.442 159.972L332.106 260.261L341.569 272.653L329.927 306.9L266.607 306.423V306.9L258.097 305.947L242.505 287.496L228.548 287.428L170.539 325.76L159.465 331.831L8.89648 270.041L11.2876 265.879L12.6016 239.097L19.3952 238.845L20.803 224.051L31.3668 223.799L37.2393 214.58L49.5749 215.594L58.9873 203.999L80.2486 204.791L92.3539 168.959L88.6479 146.94L88.1733 124.382L79.0814 113.674L79.684 100.811L97.4055 101.287L97.6506 93.8154L86.5852 93.346L89.5233 75.6416L120.779 74.8071L121.336 70.741L125.123 70.445L128.373 75.535L131.69 74.7995L141.939 66.2444L142.903 82.5599L150.697 93.4385L186.804 92.3613L211.044 82.4768L212.524 73.1846L226.124 73.1918V73.1918L226.124 73.1918V73.1918Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>

              <a xlink:title="AC" class="pointer" @click="getStateList('AC'); showModal=true">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.22871 268.322L9.74171 269.6L156.329 330.838L149.623 336.506L148.026 343.772L139.643 344.401L139.563 350.778L133.415 353.003L131.738 349.48L129.742 352.664L129.982 360.958L73.3747 361.267L72.9556 328.929L62.3168 332.04L57.1072 338.665L38.7189 339.123L37.8955 328.723L26.2138 328.543L9.24144 309.815L9.1953 300.029L0.845703 294.076L1.30167 268.105L6.22871 268.322V268.322V268.322Z"
                  fill="white"
                  stroke="#3C2243"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </a>
            </g>
            <defs>
              <filter
                id="filter0_d_7:22"
                x="0.0957031"
                y="0.112671"
                width="867.956"
                height="863.589"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="15" dy="10" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_7:22"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_7:22"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>


      <div class="mt-ot absolute pt-0 lg:mt-52 lg:ml-es">
        <p class="ml-10 hidden lg:grid lg:text-left text-lg pt-2 lg:pt-4 lg:text-2xl lg:ml-0 " id="texto-interface"><b>DIGITE O NOME DA UF</b></p>

       <div class="block lg:flex">
       <div class=" w-tm lg:w-96 mb-2 mt-2 lg:mt-3 ">
    <Multiselect
      v-model="state"
      placeholder="Selecione um estado"
      v-on:keyup.enter="getStateList(state); open()"
      @select="showModal =true; getStateList(state);"
      :closeOnSelect="true"
      :searchable="true"
      :options="estados"
      :classes="{ 
        optionSelected: 'text-white bg-green-700',
        containerActive: 'ring ring-green-900 ring-opacity-10',
        container: 'relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none',
      
        

}"
      class="py-3"
      
    />
  </div>




       <!--
        <input onfocus="this.value=''"  v-on:keyup.enter="showModal = true; getStateList(state)" type="text" placeholder="DIGITE A UF" id="place" class=" w-max px-5 text-center py-2 lg:py-6 lg:w-96 lg:text-left lg:h-14"  
        v-model="state">
-->

      <div id="bottom" class="lg: lg:mt-2">
        <button  @click="getStateList(state); open()" id="botao" class="w-tm rounded mt-0 lg:mt-1 lg:w-14  lg:ml-2 lg:p-2">
        <img id="lupa" class="w-10 my-1 ml-32 py-0 lg:ml-1 lg:w-8 " src="../images/lupa.png" alt="" />  
        </button>
        
      </div>
</div>

      </div>

     
      
    </section>
    </div>
  </section>

  <div>
    <vue-final-modal
      id="Mood"
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
      @click-outside="ClearData()"
    >
      <button class="modal__close" @click="ClearData(); showModal = false">
        <mdi-close
          >
          <div class="w-auto h-auto mt-3 mr-2 "><img class="" style="width: 10px"  src="../images/X.png" alt=""
        ></div></mdi-close>
      </button>

<div id="teste">
       <Multiselect
     
      placeholder="Selecione uma cidade"
      v-model="value"
      :closeOnSelect="true"
      :searchable="true"
      :options="municipios"
      :classes="{ 
        optionSelected: 'text-white bg-green-700',
  optionSelectedPointed :  ' text-white bg-green-800 opacity-90 '
}"
      
      
    />
    </div> 

      <div class="modal__content mb-96">
        <div id="list" class="">
          <ul id="myUL">
           <a class="pointer" @click="showModal2= true;"> <li id="item" v-for="item in municipios" :key="item.id">
              {{ item }}
            </li> </a>
          </ul>
        </div>
        </div>
      
    </vue-final-modal>
  </div>

  <!-- MODAL DE RESULTADO -->

  <div>

    <vue-final-modal
      v-model="showModal2"
      classes="modal-container"
      content-class="modal-content"
    >
     <!-- <button class="modal__close" @click="showModal2 = false">
        <mdi-close
          ><img style="width: 10px" src="../images/X.png" alt=""
        ></mdi-close>
      </button> -->
      <div>
      <div class="modal__content">
      <nav id="navmodal" class="h-px"><h5 class="pt-2 text-white"> Indicadores </h5></nav>
      <section class="ml-10 mr-10 mt-32">
      <table>
  <tr>
    <td class="flex"><img src="../images/habitantes.svg" class="w-10 mr-2" alt="">Habitantes</td>
    <td>1589</td>
  </tr>
  <tr>
    <td class="flex"><img src="../images/ativos.svg" class="w-7 mr-5" alt=""> Clientes Ativos</td>
    <td>200</td>
  </tr>
  <tr>
    <td class="flex"><img src="../images/market.svg" class="w-7 mr-5" alt="">Market Share</td>
    <td>50%</td>
  </tr>
  <tr>
    <td class="flex"><img src="../images/pin.svg" class="w-5 mr-7" alt="">Penetração</td>
    <td>20%</td>
  </tr>
  <tr>
    <td class="flex"><img src="../images/churn.svg" class="w-6 mr-6" alt="">Churn</td>
    <td>2%</td>
  </tr>
</table>
</section>

<a class="pointer" @click="showModal2=false" >
<img  src="../images/voltar2.svg" class="w-14 mt-24 ml-at absolute" alt="">
<img id="efeito"  src="../images/voltar.svg" class="w-14 mt-24 ml-at relative" alt="">


</a>
      </div>
      </div>
    </vue-final-modal>
  </div>

  <!-- FIM DO MODAL DE RESULTADO -->
  
</template>

<script>
import { ref, onMounted, reactive, computed } from "vue";
import services from "../services";
import Multiselect from '@vueform/multiselect'
import Preloader from './Preloader.vue'


export default {
  components: {
    Preloader,
    Multiselect

  },
  
  setup() {
    onMounted(() => {
      showState();
      estado();
    });

    //ABRIR MODAL//
    const showModal = ref(false);
    const showModal2 = ref(false);
    const municipios = reactive([]);
    const state = reactive([]);
    const estados = reactive([]);
    const search = reactive([]);
    const filter = computed(() => {
       municipios.filter(cidade => {
       cidade.name.toLowerCase().includes(search);
    })});

     function getStateList(uf) {
      state.shift();
      state.push(uf);
      showState(uf)
    };

    function ClearData() {
      municipios.splice(0, municipios.length);
    }
    
    function open(){
     if (state == '') {
       showModal.value = false;
     } else {
       showModal.value = true;
     }
    }
    


    function HandleModal() {
      showModal.value = true;
      showModal2.value = true;
    }
      

    const showState = async () => {
      const { data } = await services.filterStates.getAll(state);

      console.log(typeof(state));
      console.log(state)
      console.log()
    
      data.forEach((item) => {
        municipios.push(item.nome);
      });

      console.log(municipios);
    };


     const estado = async () => {
      const { data } = await services.filterStates.getEstado();

    
      data.forEach((item) => {
        estados.push(item.sigla);
      });

      console.log(municipios);
    };

    return {
      showModal,
      showModal2,
      HandleModal,
      showState,
      estado,
      municipios,
      estados,
      getStateList,
      state,
      ClearData,
      open
      
      
  
    
     
      
     
      
    
    };
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style>

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";



.mainLoginInput::-webkit-input-placeholder { 
font-family: FontAwesome;
vertical-align: top;
display: inline-block !important;
padding-left: 5px;
padding-top: 2px;
}



table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #0a686c;
  color: white;
}

tr {
  font-size: 18px;
  color: #0a686c;
}



* {
    margin: 0%;
    padding: 0%;}

#item:hover{
color: white;
background-image: url(../images/lista.svg);
transition: 0.1s;
}

#navmodal{
  background-color: #0a686c;
  height: 40px;
}

#icone{
  background: url(../images/habitante.svg);
}

a.pointer{
text-decoration: none
}

a.pointer:hover{
text-decoration: none
}

#list::-webkit-scrollbar {
  width: 20px;
}

#list::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 200px;
}

#list::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: #0a686c;
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}


#background {
  background-image: url(../images/FUNDO.png);

  background-repeat: no-repeat;
}

#header {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

#texto-header {
color: #0E959A
 
}


#imagens {
  display: flex;
  flex-direction: row;
}


#icons {
  position: relative;
}

#interface {
  display: flex;
  flex-direction: row;
}


#texto-interface {
  color: aliceblue;
}

#place {
  display: inline-block;
  border: 1px solid #F5F5F5;
  border-radius: 50px;
  background-color: #F5F5F5;
  outline: none;
}


#botao {
  border: none;
  background-color: #83d14f;
}

#botao:hover {
  background-color: #90e755;
}


svg path:hover {
  fill: #0e959a;
  transition: 0.3s;
}

/* MODAL */

#teste{
  margin-left: 140px;
  margin-top: 10px;
  
  
}

#teste div{
  margin-top: 5px;
  height: auto !important;
  width: 350px !important;
  position: absolute !important; 
  border-radius: 3px ;
  box-shadow: none !important;
  
}

.modal-container div {
  width: 505px;
  height: 560px;
  border-radius: 10px;
}

.modal-container {
  margin-bottom: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  height: 100vh;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-left: 1px;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  background-color: #fff;
}

.pointer {
  cursor: pointer;
}


/* FIM DO MODAL */

#list {
  width: 540px;
  height: 440px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 80px;
  padding-right: 10px;
  position: absolute;
}

#item {
  list-style-type: none;
  margin-bottom: 20px;
  background-image: url(../images/list.svg);
  background-size: 400px;
  background-repeat: no-repeat;
  margin-left: 10px;
  height: 100px;
  text-align: center;
  text-decoration: solid;
  border-radius: 50px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #0a686c;
  padding-top: 33px;
}

#efeito:hover{
display: none;
transition: 1s;
}
</style>