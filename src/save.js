import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {

  const blockProps = useBlockProps.save();

  return (
    <details className='accordion'>
      <RichText.Content
        { ...blockProps }
        tagName="summary"
        value={ attributes.header }
      />
      <div className='content'>
        <InnerBlocks.Content />
      </div>
    </details>
  );
}
