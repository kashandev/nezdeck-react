
export const setDocumentTitle = (pathname: string = ''): string => {
    const formattedTitle = pathname
        .split('/')
        .filter(Boolean)
        .map(segment => segment.replace(/-/g, ' '))
        .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(' | ');

    return `Nezdeck | ${formattedTitle || 'Home'}`;
};

