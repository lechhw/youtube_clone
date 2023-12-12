import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
    const params = useParams();

    return <>{params.keyword ? <div>Videos 🔍</div> : <div>Videos 🔥</div>}</>;
}
