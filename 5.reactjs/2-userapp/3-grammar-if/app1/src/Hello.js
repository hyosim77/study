import React from 'react'

function Hello ({ name , isSpecial, isPremium}) {
    return (
        <div>
            {isSpecial && '스페셜'}{isPremium ? '유료고객님' : '무료고객'}{name}님, 가입하셨습니다.
        </div>
    )
}

export default Hello