import React, { useEffect, useRef, useState } from 'react';

const Header = () => {

    const [title, setTitle] = useState('Untitled');
    const [description, setDescription] = useState('');

    return (
        <header className="bg-white z-9 border-b border-gray-300">
            <div className="mx-auto max-w-8xl px-4 py-1 sm:px-4 lg:px-4 flex items-center">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-2xl font-bold tracking-tight text-gray-900 bg-transparent border-none focus:outline-none"
                    style={{ width: `${title.length * 0.6}em` }}
                />
                <div className="relative rounded-md text-neutral-500 text-xs pl-2">
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-0 focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="+ Add a description..."
                    />
                </div>
            </div>
        </header>

    );
};

export default Header;