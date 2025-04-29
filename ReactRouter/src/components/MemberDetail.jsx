import React from 'react'
import { useParams } from 'react-router-dom'

export const MemberDetail = () => {

    // const params = useParams();
    // const memberId = params.memberId;

    const {memberId} = useParams();

  return (
    <div>
        MemberDetail : {memberId}
    </div>
  )
}
