import React, { ReactChild } from 'react';

export interface IHeaderProps {
  logo: {
    url: string;
    alt: string;
  };
  links: Array<{ label: string; path: string }>;
}
export class Header extends React.Component<IHeaderProps> {
  render(): ReactChild {
    return (
      <nav>
        <a className="logo" href={this.props.logo.url}>{this.props.logo.alt}</a>
        {this.props.links.map(l => (
          <a href={l.path}>{l.label}</a>
        ))}
      </nav>
    );
  }
}
