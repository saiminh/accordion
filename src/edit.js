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
    <div className='accordion'>
      <div class="label">Accordion (opens/collapses)</div>
      <div class="summary">
        <RichText
          { ...blockProps }
          tagName="p"
          value={ attributes.header }
          onChange={ onChangeHeader }
          allowedFormats={ [ 'core/bold', 'core/italic' ] }
          placeholder={ __( 'FAQ Question?', 'formo-accordion-summary' ) }
        />
      </div>
      <div className='content'>
        <InnerBlocks />
      </div>
    </div>
  );
}
