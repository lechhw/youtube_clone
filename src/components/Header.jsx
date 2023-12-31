import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Header() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const evtClickSearch = (e) => {
        e.preventDefault();
        navigate(`videos/${input}`);
    };

    useEffect(() => {
        setInput('');
    }, []);

    return (
        <div className="w-full h-[56px] flex items-center px-[36px] bg-[#0f0f0f] ">
            <Link
                to="/"
                className="logo  flex grow-0 shrink-0 w-[128px] items-center gap-1 text-white font-bold text-[18px]"
            >
                <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
                <h1>Youtube</h1>
            </Link>

            <form
                className="shrink-1 w-full h-[40px] flex justify-center "
                onSubmit={evtClickSearch}
            >
                <input
                    type="text"
                    className="grow-1 w-3/5 h-full border border-gray-500 rounded-l-[40px] bg-[#121212] outline-0 px-[18px] text-white"
                    placeholder="검색"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="search-btn grow-0 shrink-0 w-[64px] h-full border border-l-0 border-gray-500 rounded-r-[40px] bg-[#222222]">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-white text-xl"
                    />
                </button>
            </form>

            <div className="user flex justify-end grow-0 shrink-0  w-[128px]">
                <FontAwesomeIcon icon={faUser} className="text-white " />
            </div>
        </div>
    );
}
