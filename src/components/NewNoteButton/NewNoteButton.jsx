import {useState} from 'react'
import {useLocale} from '/src/hooks/useLocale'
import {MyButton} from '/src/components/ui/MyButton'
import {EditDialog} from '/src/components/EditDialog'

export function NewNoteButton() {
  const {$t} = useLocale()
  const [isEditDialog, setIsEditDialog] = useState(false)

  return (
    <>
      <MyButton accent onClick={() => setIsEditDialog(true)}>
        {$t('new_note')}
        <i className="material-icons">add</i>
      </MyButton>

      {isEditDialog && <EditDialog close={() => setIsEditDialog(false)} />}
    </>
  )
}
