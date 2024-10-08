import React from 'react';
import AvatarGroup from '../molecules/AvatarGroup';
import Avatar1 from '/public/Avatar.png';
import Avatar2 from '/public/Avatar2.png';
import Avatar3 from '/public/Avatar3.png';

const avatars = [
    { src: Avatar1, alt: 'User 1', width: 150, height: 150 },
    { src: Avatar2, alt: 'User 2', width: 150, height: 150 },
    { src: Avatar3, alt: 'User 3', width: 150, height: 150 },
    { src: Avatar1, alt: 'User 1', width: 150, height: 150 },
    { src: Avatar2, alt: 'User 2', width: 150, height: 150 },
    { src: Avatar3, alt: 'User 3', width: 150, height: 150 },
    { src: Avatar1, alt: 'User 1', width: 150, height: 150 },
    { src: Avatar2, alt: 'User 2', width: 150, height: 150 },
    { src: Avatar3, alt: 'User 3', width: 150, height: 150 },
    { src: Avatar1, alt: 'User 1', width: 150, height: 150 },
    { src: Avatar2, alt: 'User 2', width: 150, height: 150 },
    { src: Avatar3, alt: 'User 3', width: 150, height: 150 },
    { src: Avatar1, alt: 'User 1', width: 150, height: 150 },
    { src: Avatar2, alt: 'User 2', width: 150, height: 150 },
    { src: Avatar3, alt: 'User 3', width: 150, height: 150 },
    { src: Avatar1, alt: 'User 1', width: 150, height: 150 },
    { src: Avatar2, alt: 'User 2', width: 150, height: 150 },
    { src: Avatar3, alt: 'User 3', width: 150, height: 150 },
    { src: Avatar1, alt: 'User 1', width: 150, height: 150 },
    { src: Avatar2, alt: 'User 2', width: 150, height: 150 },
    { src: Avatar3, alt: 'User 3', width: 150, height: 150 },
    { src: Avatar1, alt: 'User 1', width: 150, height: 150 },
    { src: Avatar2, alt: 'User 2', width: 150, height: 150 },
    { src: Avatar3, alt: 'User 3', width: 150, height: 150 },
];

const AvatarGallery = () => {
    return (
        <div className="max-w-[1066px]">
            <AvatarGroup avatars={avatars} />
        </div>
    );
};

export default AvatarGallery;
