import React from 'react'
import { IMAGES } from '../../assets'
import './Tooltip.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';

const Tooltip = () => {
    return (
        <>
        <Navbar/>
            <div class='container'>
                <div class='container-wrapper'>
                    <div class='kraken-slayer'>
                        <div class='content'>
                            <div class='header'>
                                <img src={IMAGES.kraken_icon} />
                                <div class='infos'>
                                    <h3 class='name'>Kraken Slayer</h3>
                                    <p class='title'>Combat Battle</p>
                                </div>
                            </div>
                            <div class='body'>
                                <br/>
                            <p>
                                lore magna aliqu quis nostrud exercitation ul
                            </p>
                            <Link to='kraken-slayer'><button class='btn-play'>Play Now</button> </Link>
                        </div>
                        </div>
                    </div>                  
                    {/** SECOND ICON */}
                    <div class='mystical-lake'>
                        <div class='content'>
                            <div class='header'>
                                <img src={IMAGES.lake_icon} />
                                <div class='infos'>
                                    <h3 class='name'>Mystical Lake</h3>
                                    <p class='title'>Coming Soon</p>
                                </div>
                            </div>
                            <div class='body'>
                                <br/>
                            <p>
                                lore magna aliqu quis nostrud exercitation ul
                            </p>
                            <button disabled class='btn-play'>Play Now</button>
                        </div>
                        </div>
                    </div>

                    {/** THIRD ICON */}
                    <div class='Galleon'>
                        <div class='content'>
                            <div class='header'>
                                <img src={IMAGES.galleon_icon} />
                                <div class='infos'>
                                    <h3 class='name'>Galleon Race</h3>
                                    <p class='title'>Racing</p>
                                </div>
                            </div>
                            <div class='body'>
                                <br/>
                            <p>
                                lore magna aliqu quis nostrud exercitation ul
                            </p>
                            <Link to='galleon-race'><button class='btn-play'>Play Now</button> </Link>
                        </div>
                        </div>
                    </div>

                    {/** FOURTH ICON */}
                    <div class='pearl-diver'>
                        <div class='content'>
                            <div class='header'>
                                <img src={IMAGES.pearl_icon} />
                                <div class='infos'>
                                    <h3 class='name'>Pearl Diver</h3>
                                    <p class='title'>Coming Soon</p>
                                </div>
                            </div>
                            <div class='body'>
                                <br/>
                            <p>
                                lore magna aliqu quis nostrud exercitation ul
                            </p>
                            <button disabled class='btn-play'>Play Now</button>
                        </div>
                        </div>
                    </div>

                     {/** FIFTH ICON */}
                    <div class='jewel-finder'>
                        <div class='content'>
                            <div class='header'>
                                <img src={IMAGES.jewel_icon} />
                                <div class='infos'>
                                    <h3 class='name'>Jewel Finder</h3>
                                    <p class='title'>Coming Soon</p>
                                </div>
                            </div>
                            <div class='body'>
                                <br/>
                            <p>
                                lore magna aliqu quis nostrud exercitation ul
                            </p>
                            <button disabled class='btn-play'>Play Now</button>
                        </div>
                        </div>
                    </div>

                    {/** SIXTH ICON */}
                    <div class='pirate-potion'>
                        <div class='content'>
                            <div class='header'>
                                <img src={IMAGES.potion_icon} />
                                <div class='infos'>
                                    <h3 class='name'>Pirate Potion</h3>
                                    <p class='title'>Coming Soon</p>
                                </div>
                            </div>
                            <div class='body'>
                                <br/>
                            <p>
                                lore magna aliqu quis nostrud exercitation ul
                            </p>
                            <button disabled class='btn-play'>Play Now</button>
                        </div>
                        </div>
                    </div>

                     {/** SEVENTH ICON */}
                    <div class='tarot-pirates'>
                        <div class='content'>
                            <div class='header'>
                                <img src={IMAGES.tarot_icon} />
                                <div class='infos'>
                                    <h3 class='name'>Tarot Pirates</h3>
                                    <p class='title'>Coming Soon</p>
                                </div>
                            </div>
                            <div class='body'>
                                <br/>
                            <p>
                                lore magna aliqu quis nostrud exercitation ul
                            </p>
                            <button disabled class='btn-play'>Play Now</button>
                        </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Tooltip
