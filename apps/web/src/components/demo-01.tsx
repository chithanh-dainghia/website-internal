'use client'

import * as React from 'react'
import { TetraText } from 'ui'

export const Default = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div style={{ width: '400px' }}>
      <TetraText align="center" type="body1">
        Eiusmod fugiat sunt sint dolore. Qui sit mollit enim pariatur tempor
        voluptate culpa incididunt. Ullamco cillum labore velit aliqua aliquip
        reprehenderit duis proident voluptate reprehenderit. Qui magna mollit
        amet excepteur ullamco est reprehenderit ea cupidatat pariatur. Ex
        officia esse in Lorem veniam. Ea id ex sunt nisi ipsum tempor ut esse
        officia est nostrud commodo.
      </TetraText>
    </div>
    <div style={{ width: '200px' }}>
      <TetraText align="center" type="body2">
        Eiusmod fugiat sunt sint dolore. Qui sit mollit enim pariatur tempor
        voluptate culpa incididunt. Ullamco cillum labore velit aliqua aliquip
        reprehenderit duis proident voluptate reprehenderit. Qui magna mollit
        amet excepteur ullamco est reprehenderit ea cupidatat pariatur. Ex
        officia esse in Lorem veniam. Ea id ex sunt nisi ipsum tempor ut esse
        officia est nostrud commodo.
      </TetraText>
    </div>

    <div style={{ width: '200px' }}>
      <TetraText numberOfLines={3} align="start" type="body3">
        Eiusmod fugiat sunt sint dolore. Qui sit mollit enim pariatur tempor
        voluptate culpa incididunt. Ullamco cillum labore velit aliqua aliquip
        reprehenderit duis proident voluptate reprehenderit. Qui magna mollit
        amet excepteur ullamco est reprehenderit ea cupidatat pariatur. Ex
        officia esse in Lorem veniam. Ea id ex sunt nisi ipsum tempor ut esse
        officia est nostrud commodo.
      </TetraText>
    </div>
  </div>
)
