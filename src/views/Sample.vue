<template>
     <!-- <div class="event" v-for="(h, i) in highlights" :key="i" style="font-size: 14px;">
                            <div class="event-top" style=" display: flex; align-items: center; justify-content: space-around;">
                                <div class="date p-2" style="border-right: 1px solid #c1c1c1;">
                                    {{ formatDate(h.europeanStartTime) }}
                                </div>
                                <div class="time p-2" style="border-right: 1px solid #c1c1c1; color: #007219; font-weight: 600;">
                                    {{ formatTime(h.europeanStartTime) }}
                                </div>
                                <div class="event-title p-2" style="border-right: 1px solid #c1c1c1; width: 240px;">
                                    {{ h.match.homeTeam }}-{{ h.match.awayTeam }}
                                </div>
                                <div class="bet-panel p-2" style="border-right: 1px solid #c1c1c1; font-weight:bolder;">
                                    <a class="odd">
                                        <span class="ms-1" style="color: brown;">1</span>
                                        <span class="me-1">{{h.betState['matchOdds102']['o1'] / 100}}</span>
                                    </a>
                                    <a class="odd ms-1">
                                        <span class="ms-1" style="">X</span>
                                        <span class="me-1">{{h.betState['matchOdds102']['o0'] / 100}}</span>
                                    </a>
                                    <a class="odd ms-1">
                                        <span class="ms-1" style="color: brown;">1</span>
                                        <span class="me-1">{{h.betState['matchOdds102']['o2'] / 100}}</span>
                                    </a>
                                </div>
                                <div class="bet-panel p-2" style="border-right: 1px solid #c1c1c1; font-weight:bolder; display: flex;">
                                    <p class="threshold">2.5</p>
                                    <a class="odd ms-1">
                                        <span class="ms-1" style="">O</span>
                                        <span class="me-1">{{h.betState['matchOddsOU']['over'] / 100}}</span>
                                    </a>
                                    <a class="odd ms-1">
                                        <span class="ms-1" style="color: brown;">U</span>
                                        <span class="me-1">{{h.betState['matchOddsOU']['under'] / 100}}</span>
                                    </a>
                                </div>
                                <div class="p-2" style="font-weight:bolder;">
                                    <a class="odd ms-1" style="width: 25px; justify-content: center; align-items: center;"
                                    @click="showEventDetail(`highlight-${i}`)">
                                    <span class="ms-1" v-if="statusEventDetail[`highlight-${i}`]">-</span>
                                    <span class="ms-1" v-else>+</span>
                                    </a>
                                </div>
                            </div>
                            <div class="event-details" v-show="statusEventDetail[`highlight-${i}`]">
                                fdsffe
                            </div>
                        </div> -->
</template>