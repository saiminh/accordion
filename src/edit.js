import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

  const blockProps = useBlockProps();

  const onChangeHeader = ( newHeader ) => {
    setAttributes( { header: newHeader } )
  }
  const onChangeContent = ( newContent ) => {
    setAttributes( { content: newContent } )
  }

  return (
    <details className='accordion'>
      <RichText
        { ...blockProps }
        tagName="summary"
        value={ attributes.header }
        onChange={ onChangeHeader }
        allowedFormats={ [ 'core/bold', 'core/italic' ] }
        placeholder={ __( 'FAQ Question?', 'formo-accordion-summary' ) }
      />
      <div className='content'>
        <InnerBlocks />
      </div>
    </details>
  );
}
