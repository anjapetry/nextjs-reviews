import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
export default function DarlingsLayout({ children}: LayoutProps) {
    return (
        <div style={{ display: 'flex'}}>
            <div style={{ flex: 1, padding: '10px 40px'}}>
                [darlings sidebar]
                </div>
                <div>
                    {children}
                </div>
            </div>
    );
};
