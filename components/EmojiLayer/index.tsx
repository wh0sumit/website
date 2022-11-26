import Image from 'next/image';
import { useRef } from 'react';
import EmojiLayerData from './emoji-list-data.json';

export default function EmojiLayer() {
    const emojiLayerRef = useRef(EmojiLayerData);

    return (
        <div className="emoji-layer flex flex-row items-center justify-between select-none">
            {emojiLayerRef.current?.map((emoji, emojiIndex) => (
                <Image src={`/emojis/${emoji?.imageName}`} width="120" height="120" alt={emoji?.name} key={emojiIndex} 
                    className="hover:scale-105 transition-all"
                />
            ))}
        </div>
    )
}