import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'

const Letters = observer(
  ({ data, change }: { data: any; change: (value: string) => void }) => {
    const [letter, setLetter] = useState('A')
    const letters = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'Y',
      'Z',
    ]
    useEffect(() => {
      change(letter)
    }, [letter])
    return (
      <div className="our-services__letters">
        {letters.map((l, i) => (
          <div
            className={classNames(
              'our-services__letter',
              l == 'A' && 'a',
              l == 'H' && 'h',
            )}
            key={i}
            onClick={() => {
              setLetter(l)
              const letters = document.querySelectorAll('.our-services__letter')
              letters.forEach((l) => l.classList.remove('active'))
              letters[i].classList.add('active')
            }}
          >
            {l}
          </div>
        ))}
      </div>
    )
  },
)

export default Letters
