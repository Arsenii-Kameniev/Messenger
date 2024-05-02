import { } from './mainPageSlice';
import styles from './MainPage.module.css';

export function MainPage() {
    return (<>
        <div className={styles.rowMain}>
            {/* --1-- */}
            <div className={styles.columnCalls}>
                <div className={styles.row1}>
                    <img src='./images/imageId=1.png' className={styles.img1} />
                    <div className={styles.columnStart}>
                        <p>Saleha Jamshed</p>
                        <p className={styles.grey}>@saleha_123</p>
                    </div>
                </div>
                <div className={styles.columnStart}>
                    <b className={styles.bigPType}>Messeges</b>
                    <input className={styles.inputSearch} type='text' placeholder='Search chats'></input>
                    <div className={styles.columnOverflow}>
                        <div className={styles.chat}>
                            <div className={styles.imgHidden2}>
                                <img src='./images/imageId=2.png' className={styles.img2} />
                            </div>
                            <div className={styles.columnFr}>
                                <p>Emily</p>
                                <p>Hey there! 🌼 Did you catch the..</p>
                            </div>
                            <div className={styles.columnTime}>
                                <p>5s</p>
                                <div className={styles.redNotif}>
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chat}>
                            <div className={styles.imgHidden2}>
                                <img src='./images/imageId=3.png' className={styles.img2} />
                            </div>
                            <div className={styles.columnFr}>
                                <p>Liam</p>
                                <p>When will the work be ready???.</p>
                            </div>
                            <div className={styles.columnTime}>
                                <p>5m</p>
                                <div className={styles.redNotif}>
                                    <p>4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --2-- */}
            <div className={styles.columnChat}>
                <div className={styles.topChat}>
                    <div className={styles.rowChat}>
                        <div className={styles.imgHidden2}>
                            <img src='./images/imageId=3.png' className={styles.img2} />
                        </div>
                        <h2>Liam</h2>
                    </div>
                    <div className={styles.iconsBar}>
                        <img src='./images/white-phone-call.png' className={styles.icon1} />
                        <img src='./images/white-video-camera.png' className={styles.icon2} />
                        <img src='./images/white-dots.png' className={styles.icon1} />
                    </div>
                </div>
                <div className={styles.conversation}>
                    <div className={styles.responseType1}>
                        <div className={styles.answerType1}>
                            <p>Hello lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>9:47 PM</p>
                    </div>
                    <div className={styles.responseType2}>
                        <div className={styles.answerType2}>
                            <p>Bye lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>10:47 PM</p>
                    </div>
                    <div className={styles.responseType2}>
                        <div className={styles.answerType2}>
                            <p>Bye lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>10:47 PM</p>
                    </div>
                    <div className={styles.responseType2}>
                        <div className={styles.answerType2}>
                            <p>Bye lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>10:47 PM</p>
                    </div>
                    <div className={styles.responseType1}>
                        <div className={styles.answerType1}>
                            <p>Hello lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>9:47 PM</p>
                    </div>
                    <div className={styles.responseType1}>
                        <div className={styles.answerType1}>
                            <p>Hello lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>9:47 PM</p>
                    </div>
                    <div className={styles.responseType1}>
                        <div className={styles.answerType1}>
                            <p>Hello lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>9:47 PM</p>
                    </div>
                    <div className={styles.responseType2}>
                        <div className={styles.answerType2}>
                            <p>Bye lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>10:47 PM</p>
                    </div>
                    <div className={styles.responseType2}>
                        <div className={styles.answerType2}>
                            <p>Bye lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>10:47 PM</p>
                    </div>
                    <div className={styles.responseType1}>
                        <div className={styles.answerType1}>
                            <p>Hello lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>9:47 PM</p>
                    </div>
                    <div className={styles.responseType1}>
                        <div className={styles.answerType1}>
                            <p>Hello lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>9:47 PM</p>
                    </div>
                    <div className={styles.responseType1}>
                        <div className={styles.answerType1}>
                            <p>Hello lalala  lalala  lalala  lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala</p>
                        </div>
                        <p>9:47 PM</p>
                    </div>
                </div>
                {/* --3-- */}
                <div className={styles.rowMessage}>
                    <img src='./images/attach.png' className={styles.icon1} />
                    <input className={styles.inputType2} type='text' placeholder='Type text'></input>
                    <div className={styles.iconsBar2}>
                        <img src='./images/happy.png' className={styles.icon1} />
                        <img src='./images/paper-plane.png' className={styles.icon1} />
                    </div>
                </div>
            </div>
        </div>
    </>);
}